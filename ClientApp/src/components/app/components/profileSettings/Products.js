import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ProductCodeTable from './ProductCodeTable'

class Products extends PureComponent {
    render() {
        return (
            <Typography className="tab-container" component="div">
                <div className="min-height-60">
                    <Grid container className="mrB15">
                        <Grid item xs={12} sm={6}>
                            <Typography className="heading-small mrB15" component="div">
                                Add Product Code
                            </Typography>
                            <div className="add-pro-code">
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code1"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code2"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code3"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code4"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code5"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code6"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code7"
                                    type="text"
                                />
                                <TextField
                                    className="bootstrap-text-field no-label form-control-custom mrR10"
                                    //onChange={this.handleChange('name')}
                                    margin="normal"
                                    placeholder="****"
                                    name="code8"
                                    type="text"
                                />
                                <Button title="Add Product Code" >
                                 <AddCircleIcon  className="add-icon" />
                                </Button>
                               
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <div className="table-scroll-x">
                            <ProductCodeTable/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <hr className="divider mrB30" />
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={12}>
                        <Button title="Save" variant="contained" className="btn btn-primary btn-sm mrR10">
                            Save
                        </Button>
                        <Button title="Cancel" variant="contained" className="btn btn-dark-gray btn-sm ">
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Typography>
        )
    }
}

export default Products
