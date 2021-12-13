// Library
import React, { useState, useEffect } from 'react';
import Button from '@common_button';
import Typography from '@common_typography';
import { modules } from '@config';
import Footer from '@core_modules/list_category/pages/account/components/Footer';
import FooterView from '@core_modules/list_category/pages/account/components/Footer/view';
import useStyles from '@core_modules/list_category/pages/account/components/Guest/style';
import { getCategories, subscription } from '@core_modules/list_category/services/graphql';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const style = makeStyles({
    btn: { marginTop: 20, flex: 1, backgroundColor: '#FFD700' },
    input: { flex: 1, display: 'flex' },
});

const WihtOut = (props) => {
    const styles = useStyles();
    const { data } = props;
    const { data: categories } = getCategories();
    const [categoryList, setCategoryList] = useState(null);
    const [input, setInput] = useState('');
    const [toastSuccess, setToastSuccess] = useState(false);
    const [toastFailed, setToastFailed] = useState(false);
    useEffect(() => {
        setCategoryList(categories && categories.categoryList);
    }, [categories]);

    const [handleSubscription] = subscription();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setToastFailed(false);
        setToastSuccess(false);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const handleSubmit = () => {
        handleSubscription({
            variables: {
                email: input,
            },
        })
            .then((res) => {
                if (res.data && res.data.subscribeEmailToNewsletter && res.data.subscribeEmailToNewsletter.status) {
                    setToastSuccess(true);
                    setInput('');
                } else {
                    setToastFailed(true);
                    setInput('');
                }
            })
            .catch(() => {
                setToastFailed(true);
                setInput('');
            });
    };

    const GoldTextTypography = withStyles({
        root: {
            color: '#FFD700',
        },
    })(Typography);

    const classes = style();

    return (
        <div className={styles.root}>
            <div className={styles.authBlock}>
                <h1>Category List</h1>
                <div>
                    <Grid container spacing={2}>
                        {categoryList
                            && categoryList.map(
                                (category) => (
                                    <Grid item xs={3} key={category.url_key}>
                                        <Paper className={styles.textList}>
                                            <GoldTextTypography className={styles.typo}>{category.name}</GoldTextTypography>
                                        </Paper>
                                    </Grid>
                                ) || 'No data..',
                            )}
                    </Grid>
                </div>
                <form className={styles.formSubs} autoComplete="on">
                    <h1>Subscribe To Our Newsletter</h1>
                    <Input
                        onKeyPress={handleEnter}
                        className={classes.input}
                        variant="outlined"
                        placeholder=" Your Email"
                        type="email"
                        value={input}
                        onChange={handleChange}
                    />
                    <Button className={classes.btn} onClick={() => handleSubmit(input)} size="medium">
                        Subscribe
                    </Button>
                </form>

                <Snackbar open={toastSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Thank you for subscribing us
                    </Alert>
                </Snackbar>
                <Snackbar open={toastFailed} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        You already subscribed us
                    </Alert>
                </Snackbar>
            </div>

            <Footer {...props} data={data} FooterView={FooterView} modules={modules} />
        </div>
    );
};

export default WihtOut;
