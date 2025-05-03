const fs = require( 'fs-extra' );
const path = require( 'path' );
const { format } = require( 'date-fns' );

const packageJsonPath = path.join( __dirname, '..', 'package.json' );

async function setBuildDate() {
    try {
        const packageJson = await fs.readJson( packageJsonPath );
        const now = new Date();
        const formattedDate = format( now, 'yyyy.MM.dd.HH.mm.ss' ); // Your desired format

        const versionParts = packageJson.version.split( '+' );
        const baseVersion = versionParts[0];
        const newVersion = `${ baseVersion }+${ formattedDate }`;

        packageJson.version = newVersion;
        await fs.writeJson( packageJsonPath, packageJson, { spaces: 2 } );

        console.log( `Build version set to: ${ packageJson.version }` );
    } catch ( error ) {
        console.error( 'Error setting build version:', error );
    }
}

setBuildDate();