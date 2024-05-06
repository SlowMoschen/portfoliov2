
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {year} made with ❤️ by Philipp Millner</p>
        </footer>
    )
}