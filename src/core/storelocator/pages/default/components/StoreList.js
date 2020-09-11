import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const StoreList = ({ storeList, totalAllStore, onClickListItem }) => (
    <>
        <style jsx>
            {`
                .store-list {
                    border: 2px solid #ddd;
                    padding: 12px;
                    height: calc(50vh + 48px);
                    max-height: calc(50vh + 48px);
                    margin-bottom: 16px;
                    overflow: auto;
                }
                @media screen and (max-width: 767px) {
                    .store-list {
                        height: unset;
                    }
                }
                h3 {
                    margin: 0;
                }
                h3 span {
                    float: right;
                }
                hr {
                    border: 0;
                    border-top: 2px solid #ddd;
                }
            `}
        </style>
        <div className="store-list">
            <h3>
                Store List
                <span>{`( ${storeList.length} of ${totalAllStore})`}</span>
            </h3>
            <List>
                {storeList.map((store, i) => (
                    <div key={i}>
                        <hr style={{ display: i ? 'block' : 'none' }} />
                        <ListItem alignItems="flex-start" button onClick={() => onClickListItem(store)}>
                            <ListItemAvatar>
                                <Avatar src={store.baseimage} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={store.store_name}
                                secondary={(
                                    <small>
                                        {store.state}
                                        {', '}
                                        {store.city}
                                        {', '}
                                        {store.address}
                                        <br />
                                        {store.phone}
                                    </small>
                                )}
                            />
                        </ListItem>
                    </div>
                ))}
            </List>
            {!storeList.length && <div>No Results.</div>}
        </div>
    </>
);

export default StoreList;
