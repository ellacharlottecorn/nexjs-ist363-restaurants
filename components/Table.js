import { Fragment } from "react";
import styles from './Table.module.scss'

const Table = ({data}) => {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = data;
    return <table className={styles.table}>
        <tr>
            {monday.openTime ?
                <Fragment>
                    <td>Monday: </td>
                    <td>{monday.openTime} - {monday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Monday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
        <tr>
            {tuesday.openTime ?
                <Fragment>
                    <td>Tuesday: </td>
                    <td>{tuesday.openTime} - {tuesday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Tuesday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
        <tr>
            {wednesday.openTime ?
                <Fragment>
                    <td>Wednesday: </td>
                    <td>{wednesday.openTime} - {wednesday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Wednesday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
        <tr>
            {thursday.openTime ?
                <Fragment>
                    <td>Thursday: </td>
                    <td>{thursday.openTime} - {thursday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Thursday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
        <tr>
            {friday.openTime ?
                <Fragment>
                    <td>Friday: </td>
                    <td>{friday.openTime} - {friday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Friday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
        <tr>
            {saturday.openTime ?
                <Fragment>
                    <td>Saturday: </td>
                    <td>{saturday.openTime} - {saturday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Saturday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
        <tr>
            {sunday.openTime ?
                <Fragment>
                    <td>Sunday: </td>
                    <td>{sunday.openTime} - {sunday.closeTime}</td>
                </Fragment>
            : 
                <Fragment>
                    <td>Sunday: </td>
                    <td>Closed</td>
                </Fragment>
            }
        </tr>
    </table>
}
export default Table
