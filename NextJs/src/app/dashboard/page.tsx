import Blog from "@/components/blog/page";

const BarChart = () => {
    return(
        <h1>bar chart</h1>
    );
}

const Dashboard = () => {
    return(
        <>
            <h1>Dashboard</h1>
            <BarChart />
            <Blog />
        </>
    );
}

export default Dashboard;