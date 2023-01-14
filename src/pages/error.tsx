import { makeStyles } from '@fluentui/react-components'
import { HomePrimaryButton } from '../components/HomeButton'

const useStyles = makeStyles({
    text: {
        fontSize: '1.5rem'
    }
})

export default function Error() {
    const styles = useStyles()
    return (
        <div>
            <h1>Oh, we have some errors</h1>
            <p className={styles.text}>
                You can click this button to go to Home Page.
            </p>
            <HomePrimaryButton link='/'>
                Go To Home Page
            </HomePrimaryButton>
        </div>
    )
}