import { useQuery } from '@apollo/client';
import { schema } from '@core_modules/setting/services/graphql/schema';

export const getCategoryList = () => useQuery(schema.getCurrencySchema);

export default { getCategoryList };
