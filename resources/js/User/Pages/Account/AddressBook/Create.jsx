import AccountLayout from "@User/Layout/AccountLayout";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

function Create() {
    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [citiesMunicipalities, setCitiesMunicipalities] = useState([]);
    const [barangays, setBarangays] = useState([]);
    const [addressForm, setAddressForm] = useState({
        region: "",
        province: "",
        cityMunicipality: "",
        barangay: "",
        addressLine1: "",
        addressLine2: "",
    });

    useEffect(() => {
        fetch("https://psgc.gitlab.io/api/regions/")
            .then((response) => response.json())
            .then((data) => setRegions(data));
    }, []);

    useEffect(() => {
        fetch(
            `https://psgc.gitlab.io/api/regions/${addressForm.region}/provinces/`,
        )
            .then((response) => response.json())
            .then((data) => setProvinces(data));
    }, [addressForm.region]);

    useEffect(() => {
        fetch(
            `https://psgc.gitlab.io/api/provinces/${addressForm.province}/cities-municipalities/`,
        )
            .then((response) => response.json())
            .then((data) => setCitiesMunicipalities(data));
    }, [addressForm.province]);

    useEffect(() => {
        fetch(
            `https://psgc.gitlab.io/api/cities-municipalities/${addressForm.cityMunicipality}/barangays/`,
        )
            .then((response) => response.json())
            .then((data) => setBarangays(data));
    }, [addressForm.cityMunicipality]);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setAddressForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const selectedRegion = regions.find(
            (r) => r.code === addressForm.region,
        )?.name;
        const selectedProvince = provinces.find(
            (p) => p.code === addressForm.province,
        )?.name;
        const selectedCity = citiesMunicipalities.find(
            (c) => c.code === addressForm.cityMunicipality,
        )?.name;
        const selectedBarangay = barangays.find(
            (b) => b.code === addressForm.barangay,
        )?.name;

        const submissionData = {
            ...addressForm,
            region: selectedRegion,
            province: selectedProvince,
            cityMunicipality: selectedCity,
            barangay: selectedBarangay,
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
                            data-id={addressForm.region}
                            value={addressForm.region}
                            onChange={handleChange}
                        >
                            <option value="default">-- Select Region --</option>
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
                            value={addressForm.province}
                            onChange={handleChange}
                        >
                            <option value="default">
                                -- Select Province --
                            </option>
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
                            value={addressForm.cityMunicipality}
                            onChange={handleChange}
                        >
                            <option value="default">
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
                            value={addressForm.barangay}
                            onChange={handleChange}
                        >
                            <option value="default">
                                -- Select Barangay --
                            </option>
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
