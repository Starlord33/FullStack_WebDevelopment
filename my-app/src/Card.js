// Accessing the profile component in gallery.js using the children prop

// Path: my-app/src/Gallery.js
// Compare this snippet from my-app/src/Gallery.js:
// // the gallery component should map through the scientistsData array and render a profile card for each scientist

// // pass the scientist object as props to each 'Profile' component. Wrap each profile component inside a 'Card' component
//

import React from 'react';
import Profile from './Profile';
import Card from './Card';
export default Gallery;

const scientistsData = [

    {   name: 'Albert Einstein',
        birthdate: '03/14/1879',
        deathdate: '04/18/1955',
        image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUyMzUzNzg3/albert-einstein-9285408-1-402.jpg'
    },
    {   name: 'Isaac Newton',
        birthdate: '01/04/1643',
        deathdate: '03/31/1727',
        image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUyMzUzNzg3/isaac-newton-9422656-1-402.jpg'
    },
    {   name: 'Galileo Galilei',
        birthdate: '02/15/1564',
        deathdate: '01/08/1642',
        image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUyMzUzNzg3/galileo-galilei-9305220-1-402.jpg'
    },
    {   name: 'Marie Curie',
        birthdate: '11/07/1867',
        deathdate: '07/04/1934',
        image: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjQ0NzA1Nzg3/marie-curie-9263538-1-402.jpg'
    },
    {   name: 'Johannes Kepler',
        birthdate: '12/27/1571',
        deathdate: '11/15/1630',
        image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUyMzUzNzg3/johannes-kepler-9360420-1-402.jpg'
    },
    {   name: 'Nicolaus Copernicus',
        birthdate: '02/19/1473',
        deathdate: '05/24/1543',
        image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUyMzUzNzg'
    }

]

const Gallery = () => {
    return (
        <div className="gallery">
            {scientistsData.map(scientist => {
                return (
                    <Card>
                        <Profile scientist={scientist} />
                    </Card>
                )
            })}
        </div>
    )
}
// Accessing the profile component in gallery.js using the children prop

// Path: my-app/src/Gallery.js
// Compare this snippet from my-app/src/Gallery.js:
// // the gallery component should map through the scientistsData array and render a profile card for each scientist

// // pass the scientist object as props to each 'Profile' component. Wrap each profile component inside a 'Card' component
//

