import AccountLayout from "@User/Layout/AccountLayout";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

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

    function handleChange(e) {
        const { id, value } = e.target;

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
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="region"
                            className="text-sm font-bold text-gray-500 uppercase"
                        >
                            Region
                        </label>
                        <select
                            name=""
                            id="region"
                            className="w-full rounded-md border border-gray-400 p-3"
                            value={addressForm.region.code}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Region --</option>
                            {regions.map((region) => (
                                <option
                                    key={region.code}
                                    value={region.code}
                                >{`${region.regionName} - ${region.name}`}</option>
                            ))}
                        </select>
                    </div>

                    {/* Province */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="province"
                            className="text-sm font-bold text-gray-500 uppercase"
                        >
                            Province
                        </label>
                        <select
                            name=""
                            id="province"
                            className="w-full rounded-md border border-gray-400 p-3"
                            value={addressForm.province.code}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Province --</option>
                            {provinces.map((province) => (
                                <option
                                    key={province.code}
                                    value={province.code}
                                >{`${province.name}`}</option>
                            ))}
                        </select>
                    </div>

                    {/* City/Municipality */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="cityMunicipality"
                            className="text-sm font-bold text-gray-500 uppercase"
                        >
                            City/Municipality
                        </label>
                        <select
                            name=""
                            id="cityMunicipality"
                            className="w-full rounded-md border border-gray-400 p-3"
                            value={addressForm.cityMunicipality.code}
                            onChange={handleChange}
                        >
                            <option value="">
                                -- Select City/Municipality --
                            </option>
                            {citiesMunicipalities.map((cityMunicipality) => (
                                <option
                                    key={cityMunicipality.code}
                                    value={cityMunicipality.code}
                                >{`${cityMunicipality.name}`}</option>
                            ))}
                        </select>
                    </div>

                    {/* Barangay */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="region"
                            className="text-sm font-bold text-gray-500 uppercase"
                        >
                            Barangay
                        </label>
                        <select
                            name=""
                            id="barangay"
                            className="w-full rounded-md border border-gray-400 p-3"
                            value={addressForm.barangay.code}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Barangay --</option>
                            {barangays.map((barangay) => (
                                <option
                                    key={barangay.code}
                                    value={barangay.code}
                                >{`${barangay.name}`}</option>
                            ))}
                        </select>
                    </div>

                    {/* Address Line 1 */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="address_line_1"
                            className="text-sm font-bold text-gray-500 uppercase"
                        >
                            Address Line 1
                        </label>
                        <input
                            type="text"
                            name=""
                            id="address_line_1"
                            placeholder="House Number, Street Name"
                            className="w-full rounded-md border border-gray-400 p-3"
                        />
                    </div>
                    {/* Address Line 2 */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="address_line_2"
                            className="text-sm font-bold text-gray-500 uppercase"
                        >
                            Address Line 2
                        </label>
                        <input
                            type="text"
                            name=""
                            id="address_line_2"
                            placeholder="Addition Address Information"
                            className="w-full rounded-md border border-gray-400 p-3"
                        />
                    </div>
                    <button
                        type="submit"
                        className="cursor-pointer rounded-md bg-rose-300 py-3 text-lg font-bold transition duration-200 ease-in-out hover:bg-rose-200"
                    >
                        Save Address
                    </button>
                </form>
            </section>
        </AccountLayout>
    );
}

export default Create;
