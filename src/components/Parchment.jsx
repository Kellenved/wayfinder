import parchmentImage from '../assets/parchment.png'

function Parchment({solved}) {
    return (
        <div className="parchment-container">
                <img
                  className="parchment-image"
                  src={parchmentImage}
                  alt="An old damaged parchment"
                />

                <div className="parchment-text">
                  <p className="parchment-book">
                    LU
                    {solved ? (
                      <span className="revealed-letter">K</span>
                    ) : (
                      <span>_</span>
                    )}
                    E
                  </p>
                  <p className="parchment-chapter">10</p>
                  <p className="parchment-verses">25 - 37</p>
                </div>
              </div>
    )
}

export default Parchment