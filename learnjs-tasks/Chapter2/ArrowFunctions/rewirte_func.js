let ask = (question, yes, no) => {
    if (confirm(question)) {
        return yes();
    }
    return no();
};

ask ('Вы согласны?', 
    () => console.log('Вы согласились.'),
    () => console.log('Вы отменили выполнение.')
);