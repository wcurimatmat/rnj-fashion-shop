import ContentManagement from "./ContentManagement";
import Settings from "./Settings";

import NavigationItem from "./NavigationItem";

function Navigation() {
    return (
        <nav>
            <ul>
                <NavigationItem />

                <li>
                    <ContentManagement />
                </li>
                <li>
                    <Settings />
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
