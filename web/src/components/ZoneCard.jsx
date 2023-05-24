/* eslint-disable react/prop-types */

const ZoneCard = ({ image, name, description }) => {
  return (
    <div className="max-w-md bg-blue-200 rounded-lg p-4 grid-rows-cardZone">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>Description: {description?.substring(0, 120)}...</p>
      </div>
    </div>
  )
}

export default ZoneCard;