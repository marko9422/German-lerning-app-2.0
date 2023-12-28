import React from 'react'

export default function CV_gallery(props) {
    const styles = {
        div: {
            textAlign:'center',
            background: 'rgb(222, 222, 222)',
            padding: '10px',
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: `url(${props.pictureInGallery})`,
            backgroundSize: '80% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        },
        closetext: {
            color: 'red',
            fontSize: '25px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    };


    return (
        <>
            <div style={styles.div}>
                <p style={styles.closetext}>Click to close.</p>
            </div>
        </>
    )
}

