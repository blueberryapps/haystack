/* eslint-disable react/no-danger */
import React from 'react';

export function googleTagManagerScript() {
  if (!process.env.GTM_ID) return null;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');`
      }}
    />
  );
}

export function googleTagManagerNoScript() {
  if (!process.env.GTM_ID) return null;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: `
        <!-- Google Tag Manager (noscript) -->
        <script>
          dataLayer= window.dataLayer === 'undefined' ? [] : window.dataLayer;
        </script>
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->`
      }}
    />
  );
}
