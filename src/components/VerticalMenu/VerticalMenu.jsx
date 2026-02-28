import "./VerticalMenu.scss";

function VerticalMenu({ children }) {

    return (
        <>
            <div class="vertical-menu">
            <a href="#" class="active">Dashboard</a>
            <a href="#">Sales</a>
            <a href="#">Engagement</a>
            <a href="#">Accuracy</a>
            <a href="#">Analysis</a>
            </div>
        </>
    );
}
export default VerticalMenu;