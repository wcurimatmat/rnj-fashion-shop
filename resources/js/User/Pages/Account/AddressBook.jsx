import Index from "./Index";
import { Check, Delete } from "lucide-react";

function AddressBook() {
    return (
        <>
            <section className="mb-6">
                <header>
                    <h2 className="text-2xl font-bold">Address Book</h2>
                </header>
            </section>

            <section>
                <ul>
                    <li>
                        <div className="">
                            <div className="">
                                <p>
                                    566 Shaw Boulevard, Mandaluyong City, Metro
                                    Manila, Philippines
                                </p>
                                <div className="">
                                    <p>Current Address</p>
                                </div>
                            </div>

                            <div className="">
                                {/* Actions here: Set as current address | Delete Address */}

                                <button>
                                    <Delete size={20} strokeWidth={1.5} />
                                </button>
                                <button>
                                    <Check size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <section>
                <button>Add Address</button>
            </section>
        </>
    );
}

export default AddressBook;
