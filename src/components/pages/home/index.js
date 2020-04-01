import Content from "./component";
import Layout from "../../layouts";
import { withTranslation } from "../../../../i18n";

const Page = (props) => {
    const {t} = props;
    const pageConfig = {
        title: t("home:pageTitle"),
        header: false // available values: "absolute", "relative", false (default)
    };
    return (
        <Layout pageConfig={pageConfig}>
            <Content {...props}/>
        </Layout>
    );
};

export default withTranslation()(Page);