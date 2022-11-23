export default class Effect
{
    damage_light = "../vhs_overlays/2.gif";
    damage_heavy = "../vhs_overlays/1.gif";

    constructor()
    {
        this.activeEffect = false;
    }

    rollStatic()
    {
        switch (Math.floor(Math.random() * 3))
        {
            case 0:
                this.none();
                break;
            case 1:
                this.light();
                break;
            case 2:
                this.heavy();
                break;
        }
    }

    none()
    {
        document.getElementById("vhs_overlay_div").style.visibility = 'hidden';
    }
    light()
    {
        document.getElementById("vhs_overlay").src = this.damage_light;
        document.getElementById("vhs_overlay_div").style.visibility = 'visible';
    }
    heavy()
    {
        document.getElementById("vhs_overlay").src = this.damage_heavy;
        document.getElementById("vhs_overlay_div").style.visibility = 'visible';
    }
}