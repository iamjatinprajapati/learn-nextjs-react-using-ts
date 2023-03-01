import {useEffect} from "react";

const CodePen = ({
                     hash,
                     userName = "@jprajapati",
                     userDisplayName = "Jatin Prajapati",
                     title
                 }: { hash: string, userName?: string, userDisplayName?: string, title: string }) => {
    const style = {
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyCenter: "center",
        "border": "2px",
        "margin": "1em 0",
        "padding": "1em"
    };
    useEffect(() => {
        //if (!document.getElementById('codepen_script'))
        {
            const script = document.createElement('script');
            script.id = 'codepen_script';
            script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);
    return (
        <div className="codepen" data-height="300" data-default-tab="js,result" data-slug-hash={hash}
             data-editable="true" data-user="jprajapati"
             style={style}>
  <span>See the Pen <a href="https://codepen.io/jprajapati/pen/ZEMeBBo">
  {title}</a> by {userDisplayName} (<a href="https://codepen.io/jprajapati">{userName}</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
        </div>
    );
}

export default CodePen;