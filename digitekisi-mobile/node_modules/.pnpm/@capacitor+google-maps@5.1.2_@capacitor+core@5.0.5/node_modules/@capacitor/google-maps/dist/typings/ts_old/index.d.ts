import { MapType, Marker, Polygon, Circle, Polyline, StyleSpan } from './definitions';
import { GoogleMap } from './map';
export { GoogleMap, MapType, Marker, Polygon, Circle, Polyline, StyleSpan };
declare global {
    export namespace JSX {
        interface IntrinsicElements {
            'capacitor-google-map': any;
        }
    }
}
