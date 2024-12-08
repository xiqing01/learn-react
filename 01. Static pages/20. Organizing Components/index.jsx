import { createRoot } from "react-dom/client"
import Header from "./Header"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */





function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
