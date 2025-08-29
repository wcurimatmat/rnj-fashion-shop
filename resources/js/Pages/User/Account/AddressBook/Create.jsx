import AccountLayout from "@layouts/Users/AccountLayout";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import SelectLocation from "@/Components/Users/SelectLocation/SelectLocation";
import { Label } from "@/Shadcn/components/ui/label";
import { Input } from "@/Shadcn/components/ui/input";
import { Button } from "@/Shadcn/components/ui/button";

function Create() {
    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [citiesMunicipalities, setCitiesMunicipalities] = useState([]);
    const [barangays, setBarangays] = useState([]);
    const [addressForm, setAddressForm] = useState({
        region: { code: "", name: "" },
        province: { code: "", name: "" },
        cityMunicipality: { code: "", name: "" },
        barangay: { code: "", name: "" },
        addressLine1: "",
        addressLine2: "",
    });

    async function fetchLocation(URL, setter) {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setter(data);
        } catch (error) {
            console.log("Fetch Error:", error);
        }
    }

    useEffect(() => {
        fetchLocation("https://psgc.gitlab.io/api/regions/", setRegions);
    }, []);

    useEffect(() => {
        if (addressForm.region.code) {
            fetchLocation(
                `https://psgc.gitlab.io/api/regions/${addressForm.region.code}/provinces/`,
                setProvinces,
            );
        }
    }, [addressForm.region.code]);

    useEffect(() => {
        if (addressForm.province.code) {
            fetchLocation(
                `https://psgc.gitlab.io/api/provinces/${addressForm.province.code}/cities-municipalities/`,
                setCitiesMunicipalities,
            );
        }
    }, [addressForm.province.code]);

    useEffect(() => {
        if (addressForm.cityMunicipality.code) {
            fetchLocation(
                `https://psgc.gitlab.io/api/cities-municipalities/${addressForm.cityMunicipality.code}/barangays/`,
                setBarangays,
            );
        }
    }, [addressForm.cityMunicipality.code]);

    function handleChange(id, value) {
        if (id === "region") {
            const selected = regions.find((region) => region.code === value);

            setAddressForm((prev) => ({
                ...prev,
                region: { code: value, name: selected?.name || "" },
                province: { code: "", name: "" },
                cityMunicipality: { code: "", name: "" },
                barangay: { code: "", name: "" },
            }));

            setProvinces([]);
            setCitiesMunicipalities([]);
            setBarangays([]);
        }

        if (id === "province") {
            const selected = provinces.find(
                (province) => province.code === value,
            );

            setAddressForm((prev) => ({
                ...prev,
                province: { code: value, name: selected?.name || "" },
                cityMunicipality: { code: "", name: "" },
                barangay: { code: "", name: "" },
            }));

            setCitiesMunicipalities([]);
            setBarangays([]);
        }

        if (id === "cityMunicipality") {
            const selected = citiesMunicipalities.find(
                (cityMunicipality) => cityMunicipality.code === value,
            );

            setAddressForm((prev) => ({
                ...prev,
                cityMunicipality: { code: value, name: selected?.name || "" },
                barangay: { code: "", name: "" },
            }));

            setBarangays([]);
        }

        if (id === "barangay") {
            const selected = barangays.find(
                (barangay) => barangay.code === value,
            );

            setAddressForm((prev) => ({
                ...prev,
                barangay: { code: value, name: selected?.name || "" },
            }));
        }

        if (id === "addressLine1") {
            setAddressForm((prev) => ({
                ...prev,
                addressLine1: value,
            }));
        }

        if (id === "addressLine2") {
            setAddressForm((prev) => ({
                ...prev,
                addressLine2: value,
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const submissionData = {
            ...addressForm,
            region: addressForm.region.name,
            province: addressForm.province.name,
            cityMunicipality: addressForm.cityMunicipality.name,
            barangay: addressForm.barangay.name,
        };

        console.log("Submitting:", submissionData);
    }

    return (
        <AccountLayout>
            <section className="mb-8">
                <h2 className="text-2xl font-bold">
                    <Link
                        href={route("account.address-book.index")}
                        className="text-rose-400"
                    >
                        Address Book
                    </Link>{" "}
                    <span>/</span> Create
                </h2>
            </section>

            <section>
                <form onSubmit={handleSubmit} className="grid max-w-lg gap-4">
                    {/* Region */}
                    <SelectLocation
                        locations={regions}
                        onChangeValue={handleChange}
                        placeholder="Select Region"
                        id="region"
                        label="Region"
                        value={addressForm.region.code}
                    />

                    {/* Province */}
                    <SelectLocation
                        locations={provinces}
                        onChangeValue={handleChange}
                        placeholder="Select Province"
                        id="province"
                        label="Province"
                        value={addressForm.province.code}
                    />

                    {/* City/Municipality */}
                    <SelectLocation
                        locations={citiesMunicipalities}
                        onChangeValue={handleChange}
                        placeholder="Select City/Municipality"
                        id="cityMunicipality"
                        label="City/Municipality"
                        value={addressForm.cityMunicipality.code}
                    />

                    {/* Barangay */}
                    <SelectLocation
                        locations={barangays}
                        onChangeValue={handleChange}
                        placeholder="Select Barangay"
                        id="barangay"
                        label="Barangay"
                        value={addressForm.barangay.code}
                    />

                    {/* Address Line 1 */}
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="addressLine1"
                            className="text-base font-bold text-gray-500"
                        >
                            Address Line 1
                        </Label>
                        <Input
                            type="text"
                            id="addressLine1"
                            placeholder="House number, street name"
                            className="py-5"
                            value={addressForm.addressLine1}
                            onChange={(e) =>
                                handleChange("addressLine1", e.target.value)
                            }
                        />
                    </div>
                    {/* Address Line 2 */}
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="addressLine2"
                            className="text-base font-bold text-gray-500"
                        >
                            Address Line 2
                        </Label>
                        <Input
                            type="text"
                            id="addressLine2"
                            placeholder="Addition address information"
                            className="py-5"
                            value={addressForm.addressLine2}
                            onChange={(e) =>
                                handleChange("addressLine2", e.target.value)
                            }
                        />
                    </div>
                    <Button
                        type="submit"
                        className="bg-rose-300 py-6 text-base font-bold hover:bg-rose-200"
                    >
                        Save Address
                    </Button>
                </form>
            </section>
        </AccountLayout>
    );
}

export default Create;
