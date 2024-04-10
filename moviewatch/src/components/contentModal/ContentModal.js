import * as React from 'react';
import { img_300, unavailable } from './../../config/config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "70%",
  bgcolor: 'black',
  borderRadius: 5,
  color: "white",
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({ children, title, poster, vote, overview }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="media">{children}</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>Exit</Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {<img className="posterbox" src={poster ? `${img_300}/${poster} ` : unavailable} alt={title} />}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ maxHeight: '60px', overflowY: 'auto' }}>
            {title}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className='vote'>⭐{vote}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {overview}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
