import React from 'react'
import FooterLogo from '../../assets/Icons/FooterLogo'
import '../../styles/FooterTitle.sass'

const FooterTitle = () => {
  return (
    <>
      <div className='footer-header'>
        <FooterLogo />
        <p className='footer-paragraph'>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies.
          Est et facilisi bibendum feugiat adipiscing duis tincidunt semper.
          Risus euismod mi cursus euismod justo ac.</p>
      </div>
    </>
  )
}

export default FooterTitle
