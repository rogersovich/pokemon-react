import { Layout, Grid } from "antd";

const { useBreakpoint } = Grid;
const { Content } = Layout;

export default function Web({ children }) {

  const screens = useBreakpoint();

  return (
    <Layout style={{ minHeight: "100vh"}} className="tw-bg-gradient-to-r tw-from-gray-50 tw-to-gray-100">
      <Content className={screens.xs ? 'tw-my-10 tw-mx-8' : 'tw-my-10 tw-mx-16'}>{children}</Content>
    </Layout>
  );
}
