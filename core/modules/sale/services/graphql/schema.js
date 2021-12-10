import { gql } from '@apollo/client';

const getCategoryList = gql`
    {
        categoryList(filters: {}) {
            id
            name
            image
            include_in_menu
        }
    }
`;

export default getCategoryList;
