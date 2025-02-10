import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    console.log(props.photo);
  return (
    <StyledWrapper photo={props.photo}>
      <div className="card">
        <b />
        <div className="content">
          <p className="title">{props.name}<br /><span>{props.post}</span></p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background: ${({ photo }) => `url(${photo})`} no-repeat center center / cover; /* ✅ Correct way to set background */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(315deg,#03a9f4,#ff0058);
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(315deg,#03a9f4,#ff0058);
    // filter: blur(30px);
  }
.card:hover::before{
    opacity: 1;
}
  .card b {
    position: absolute;
    inset: 0px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .card img {
    position: absolute;
    z-index: 3;
    scale: 0.8;
    opacity: 0.25;
    transition: 0.5s;
  }

  .card:hover img {
    scale: 0.5;
    opacity: 0.9;
    transform: translateY(-70px);
  }

  .card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }

  .card:hover .content {
    transform: scale(1);
    bottom: 25px;
  }

  .content .title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.70em;
  }
}`;

export default Card;
