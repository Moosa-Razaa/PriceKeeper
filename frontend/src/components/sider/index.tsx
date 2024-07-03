import { Avatar, Button, Divider } from "antd";
import style from "./style.module.css";
import { GlobalOutlined, HomeFilled, PieChartFilled, UserOutlined, WalletOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const sideButtons = [
    {
        name: "Home",
        icon: <HomeFilled style={{ fontSize: "20px" }} />
    },
    {
        name: "Expenses",
        icon: <PieChartFilled style={{ fontSize: "20px" }} /> 
    },
    {
        name: "Trips",
        icon: <GlobalOutlined style={{ fontSize: "20px" }} /> 
    },
    {
        name: "Approvals",
        icon: <WalletOutlined style={{ fontSize: "20px" }} />
    }
]

function SiderComponent() {
    return(
        <div className={style["main"]}>
            <div className={style["user-profile-div"]}>
                <Avatar size={80} className={style["avatar"]} icon={<UserOutlined />} />
                <Title level={3} className={style["username-heading"]}>Moosa Raza</Title>
            </div>

            <div className={style["divider-div"]}>
                <Divider className={style["divider"]} type="horizontal" />
            </div>

            <div className={style["side-buttons-div"]}>
                {sideButtons.map((currentItem, index) => {
                    return(
                        <Button icon={currentItem.icon} iconPosition="start" key={index} className={style["sider-button"]}>
                            <Title level={5} className={style["sider-button-text"]}>{currentItem.name}</Title>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default SiderComponent;