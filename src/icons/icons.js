import React from "react";

export const TaskIcon = () => {
  return (
    <>
      <svg
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-75 feather feather-mail"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </>
  );
};

export const ImportantIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-75 feather feather-star"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </>
  );
};

export const CompletedIcon = () => {
  return (
    <>
      <svg
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-75 feather feather-check"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  );
};

export const DeletedIcon = () => {
  return (
    <>
      <svg
        width="18px"
        height="18px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-75 feather feather-trash"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    </>
  );
};

export const ImportedIcon = () => {
  return (
    <svg
      data-v-6b93e4ba=""
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="ml-1 cursor-pointer feather feather-star"
    >
      <polygon
        data-v-6b93e4ba=""
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  );
};

export const ActiveIcon = () => {
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-body feather feather-bell"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );
};

export const LowTagIcon = () => {
  return (
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" fill="green" />
    </svg>
  );
};

export const MediumTagIcon = () => {
  return (
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" fill="orange" />
    </svg>
  );
};

export const HighTagIcon = () => {
  return (
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" fill="red" />
    </svg>
  );
};
