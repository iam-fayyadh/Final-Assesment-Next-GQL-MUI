import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';

import Core from '@core_modules/list_category/pages/account/core';
import Skeleton from '@core_modules/list_category/pages/account/components/Skeleton';
import GuestView from '@core_modules/list_category/pages/account/components/Guest';

const Page = (props) => <Core {...props} Skeleton={Skeleton} GuestView={GuestView} />;

Page.getInitialProps = async () => ({
    namespacesRequired: ['common', 'customer', 'rewardpoint', 'productreview'],
});

export default withApollo({ ssr: true })(withTranslation()(Page));
