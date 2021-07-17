import React from "react";

function Trailer() {
  return (
    <>
      <div
        className="ui embed"
        data-url="https://www.youtube.com/embed/O6Xo21L0ybE"
        data-placeholder="/images/bear-waving.jpg"
      >
        <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
      <script>$('.ui.embed').embed();</script>
    </>
  );
}

export default Trailer;
