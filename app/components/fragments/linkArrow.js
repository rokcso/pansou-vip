export default function LinkArrow() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        class="bi bi-arrow-up-right"
        viewBox="0 0 16 16"
        style={{
          width: "0.8em" /* 设置图标的宽度 */,
          height: "0.8em" /* 设置图标的高度 */,
          marginLeft: "0.4em" /* 图标和文本之间的间距 */,
          fill: "currentColor" /* 使图标颜色与链接文字颜色一致 */,
          transition: "transform 0.2s" /* 添加图标变化的过渡效果 */,
        }}
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M6.25 3.75h6m0 0v6m0-6-8.5 8.5"
        ></path>
      </svg>
    );
  }
  