const yOffset = -160;

export default function handleClick(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    e.preventDefault();
    const clickedElement = e.target as HTMLParagraphElement;
    const clickedElementText = clickedElement.innerHTML.toLowerCase();

    const scrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (clickedElementText === "services") {
        scrollToElement("services");
    } else if (clickedElementText === "our work") {
        scrollToElement("our-work");
    } else if (clickedElementText === "team" || clickedElementText === "the team") {
        scrollToElement("team");
    } else if (clickedElementText === "why us?" || clickedElementText === "why us") {
        scrollToElement("why-us");
    } else if (clickedElementText === "get in touch" || clickedElementText === "contact us") {
        scrollToElement("contact");
    }
}
