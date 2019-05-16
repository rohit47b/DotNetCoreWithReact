import React, { PureComponent } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

class ProductCodeTable extends PureComponent {
    state = {
        tabelData: [
            { id: 0, productCode: '85a3-794d-7d58-40b9-94d5-4f2b-dlc8-5aac', titleNo: 'Mortgage Closing Room', address: '1.0' },
            { id: 1, productCode: '85a3-794d-7d58-40b9-94d5-4f2b-dlc8-3aac', titleNo: 'Mortgage', address: '1.0' },
            { id: 2, productCode: '85a3-794d-7d58-40b9-94d5-4f2b-dlc8-4aac', titleNo: 'Mortgage Room', address: '1.0' },
        ],
    }

    render() {
        const { tabelData } = this.state
        console.log('')
        return (
           
                <Table className="table-bordered">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product Code</TableCell>
                            <TableCell align="left">Title Number</TableCell>
                            <TableCell align="left">Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tabelData.map(data => {
                            return (
                                <TableRow key={data.id}>
                                    <TableCell align="left">{data.productCode}</TableCell>
                                    <TableCell align="left">{data.titleNo}</TableCell>
                                    <TableCell align="left">{data.address}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            
        )
    }
}

export default ProductCodeTable
