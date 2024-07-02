import { Layout } from 'antd';
import style from './App.module.css';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

function App() {
  return (
    <div className={style["main"]}>
      <Layout className={style["layoutStyle"]}>
      <Sider className={style["siderStyle"]} width="25%">
        Sider
      </Sider>
      <Layout>
        <Header className={style["headerStyle"]}>Header</Header>
        <Content className={style["contentStyle"]}>Content</Content>
      </Layout>
    </Layout>
    </div>
  )
}

export default App
