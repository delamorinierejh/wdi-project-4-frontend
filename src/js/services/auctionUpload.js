angular
.module('bidUpApp')
.service('AuctionUpload', AuctionUpload);

AuctionUpload.$inject = ['Upload', 'API'];
function AuctionUpload(Upload, API){
  return {
    // sendPayload: (formData, method, url) => {
    //   console.log('jibbing create');
    //   var uploadImg = formData.auction.upload_img;
    //   var options = {
    //     url: url,
    //     method: method,
    //     file: uploadImg,
    //     file_form_data_name: uploadImg.name,
    //     fields: {
    //       auction: {
    //         title: formData.auction.title,
    //         body: formData.auction.body
    //       }
    //     }
    //   };
    //   Upload.upload(options);
    // },

    createWithAttachment: (formData) => {
      console.log('running create');
      var uploadImg = formData.upload_img;
      var options = {
        url: `${API}/auctions`,
        method: 'POST',
        file: uploadImg,
        // file_form_data_name: uploadImg.name,
        fields: {
          auction: {
            title: formData.title,
            description: formData.description,
            charity: formData.charity,
            end_date: formData.end_date,
            reserve: formData.reserve
          }
        }
      };
      Upload.upload(options);
    }

    //
    //
    // editWithAttachment: (formData, recordId) => {
    //   var sendPayload = sendPayload;
    //   sendPayload(formData,
    //     'PUT',
    //     `${API}/auctions/${recordId}`);
    // }

  };
}
