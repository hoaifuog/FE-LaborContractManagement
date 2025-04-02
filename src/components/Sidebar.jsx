import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
    DashboardOutlined,
    TeamOutlined,
    ApartmentOutlined,
    SolutionOutlined,
    FileTextOutlined,
    UserSwitchOutlined,
    BarChartOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = () => {
    return (
        <Sider collapsible style={{ minHeight: "100vh", background: "#001529" }}>
            <div style={{ textAlign: "center", padding: "16px" }}>
                <img
                    src="https://via.placeholder.com/100"
                    alt="Avatar"
                    style={{ borderRadius: "50%", marginBottom: "8px" }}
                />
                <Title level={4} style={{ color: "#fff" }}>Admin Name</Title>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
                <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                    <NavLink to="/">Dashboard</NavLink>
                </Menu.Item>
                <Menu.Item key="employees" icon={<TeamOutlined />}>
                    <NavLink to="/employees">Quản Lý Nhân Viên</NavLink>
                </Menu.Item>
                <Menu.Item key="departments" icon={<ApartmentOutlined />}>
                    <NavLink to="/departments">Quản Lý Phòng Ban</NavLink>
                </Menu.Item>
                <Menu.Item key="positions" icon={<SolutionOutlined />}>
                    <NavLink to="/positions">Quản Lý Chức Vụ</NavLink>
                </Menu.Item>
                <Menu.Item key="contracts" icon={<FileTextOutlined />}>
                    <NavLink to="/contracts">Hợp Đồng Lao Động</NavLink>
                </Menu.Item>
                <Menu.Item key="recruitment" icon={<UserSwitchOutlined />}>
                    <NavLink to="/recruitment">Tuyển Dụng</NavLink>
                </Menu.Item>
                <Menu.Item key="reports" icon={<BarChartOutlined />}>
                    <NavLink to="/reports">Báo Cáo & Thống Kê</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
