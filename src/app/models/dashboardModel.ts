import { Tile } from './Tile';

export interface DashboardInfo {
    
    _id : String,
    date: Date,
    desktopTiles: Tile[],
    mobileTiles: Tile[],
    secondaryTiles: Tile[]
}