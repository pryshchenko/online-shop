import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader className="pizza-block"
  speed={2}
  width={280}
  height={550}
  viewBox="0 0 280 550"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <circle cx="134" cy="136" r="120" /> 
  <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
  <rect x="0" y="326" rx="10" ry="10" width="280" height="85" />
  <rect x="95" y="430" rx="10" ry="10" width="75" height="30" />
  <rect x="65" y="465" rx="24" ry="24" width="140" height="45" />
    </ContentLoader>
)
