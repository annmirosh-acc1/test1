///1
// hi

onUserEvent((p, e)=>{
    console.info('==', e);
    if (e.event === "buttonClicked") {
        p.play({foo:123});
    }
});

