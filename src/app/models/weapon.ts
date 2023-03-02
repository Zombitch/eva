export interface Weapon{
    name?: string;
    type?: string;
    image?: string;

    damage?: number; // Dégats
    fireRate?: number; // cadence
    range?: number; // portée
    
    details?: WeaponDetails;
    hidden?: boolean;
}

export interface WeaponDetails{
    headDamage?: number; // tete
    bodyDamage?: number; // torse
    endDamage?: number; // extrémité

    fireRate?: number; // cadence
    bulletSpeed?: number; // vitesse des balles
    reloadSpeed?: number; // Temps de recharge
    magazineNumber?: number; // Nombre de chargeur
    dispersion?: number; // dispersion

    damageDrop?: DamageDrop[];
}

export interface DamageDrop{
    percentage?: number;
    distance?: number;
    distanceInfo?: string; // drop damage is occuring more than or less than or equal to given distance ?
}