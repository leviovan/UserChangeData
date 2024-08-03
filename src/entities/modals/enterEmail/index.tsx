import { LoadingButton } from '@mui/lab'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import React from 'react'

interface IModal {
  isOpen: boolean
  pending: boolean
  onClose: () => void
  onSubmit: (arg0: string) => void
}

const EnterEmailModal = ({ isOpen, onClose, onSubmit, pending }: IModal) => {
  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          const formJson = Object.fromEntries((formData as any).entries())
          const email = formJson.email
          onSubmit(email)
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <LoadingButton type="submit" loading={pending}>
          Subscribe
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export default EnterEmailModal
