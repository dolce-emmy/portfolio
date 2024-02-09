import React from 'react'


export const Star = ({ className, ...rest }) =>
  Array.from({ length: 5 }).map((_, index) => {
    return (

      <span className='absolute inset-0 block 0 bg-red-500'>
        <svg

          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width={58}
          height={58}
          className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
          
          {...rest}
        >
          <title />
          <g fill="none" fillRule="evenodd">
            <path
              fill="#F6AB27"
              d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
            />
            <path
              fill="#F4CD1E"
              d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
            />
          </g>
        </svg>
      </span>
    );
  });
