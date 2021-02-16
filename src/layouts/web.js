import { Layout, Grid } from "antd";

const { useBreakpoint } = Grid;
const { Content } = Layout;

export default function Web({ children }) {

  const screens = useBreakpoint();

  return (
    <Layout style={{ minHeight: "100vh"}} className="bg-gradient-to-r from-gray-50 to-gray-100">
      <Content className={screens.xs ? 'my-10 mx-8' : 'my-10 mx-16'}>{children}</Content>
    </Layout>
  );
}
