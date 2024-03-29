import { Button } from "../Button";
import Modal from "../Modal";

const DialogModal = ({ open, title, content, handleClose, labelButton = 'Hapus', type = 'dialog' }) => {

    return (
        <Modal
            open={open}
            title={title}
            setClose={() => handleClose(0)}
            type={type}
        >
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {content}
                </p>
            </div>
            <div className="flex justify-end gap-6 items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                {
                    type === 'dialog' ? (
                        <Button
                            title='Tidak'
                            bgColor='bg-primary'
                            bgColorHover='hover:bg-bgHoverPrimary'
                            onClick={() => handleClose(0)}
                        />
                    ) : null
                }

                <Button
                    title={labelButton}
                    bgColor='bg-bgRed'
                    hoverBgColor="hover:bg-red-900"
                    onClick={() => handleClose(1)}
                />
            </div>
        </Modal>
    )
}

export default DialogModal;