import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    table: {
        borderCollapse: 'collapse',
        width: '80%'
    },
    th: {
        border: '1px solid #ddd',
        padding: 8,
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'left',
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    td: {
        border: '1px solid #ddd',
        padding: 8
    },
    tr: {
        "&:hover": {
            backgroundColor: '#ddd'
        }
    }
})

const Table = ({
    titles = ['Example titles 1', 'Example titles 2'],
    contents = ['Example value 1', 'Example value 2']
}) => {
    const classes = useStyle();

    return (
        <table className={classes.table} data-testid="table-test">
            <thead>
                <tr className={classes.tr}>
                    {titles.map(title => (
                        <th className={classes.th} key={title} data-testid="title-test">{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {contents.map((content, key) => (
                    <tr key={key} className={classes.tr}>
                        <td className={classes.td} data-testid="content-test">{content.product}</td>
                        <td className={classes.td} data-testid="content-test">{content.quantity}</td>
                        <td className={classes.td} data-testid="content-test">{content.price} €</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Table;