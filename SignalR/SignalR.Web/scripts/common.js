function ToShortDate(_date)
{
    return _date.getMonth() + 1 + "/" + _date.getDate() + '/' + _date.getFullYear();
}

function customConfirm(msg,okFunction)
{
    BootstrapDialog.show({
        message: msg,
        buttons: [{
            label: 'Yes',
            cssClass: 'btn-primary',
            action: okFunction
        }, {
            label: 'Close',
            action: function (dialogItself) {
                dialogItself.close();
            }
        }]
    });
}

function customAlert(msg)
{
    BootstrapDialog.alert(msg);
}