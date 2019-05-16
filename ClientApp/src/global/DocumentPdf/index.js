import React, { PureComponent } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import RemoveIcon from '@material-ui/icons/HighlightOff'


class DocumentPdf extends PureComponent {

  render() {
      const{handleDialogPdfClose,isOpen} =this.props
    return (
    
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={isOpen}
          onClose={handleDialogPdfClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="pdf-dialog"
        >
          <DialogContent>
                <div className="pdf">
                    <img alt="pdf" style={{width:'100%'}} src="/assets/images/popuppdf.png"/>
                </div>
          </DialogContent>
         <RemoveIcon onClick={handleDialogPdfClose}/>
        </Dialog>
    )
  }
}

export default DocumentPdf