import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/templates/Header/Header';
import Content from './components/templates/Content/Content';
import HeaderRender from './components/templates/HeaderRender/HeaderRender';
import ContentRender from './components/templates/ContentRender/ContentRender';
import ErrorAlert from './components/organisms/ErrorAlert/ErrorAlert';

const useStyle = makeStyles({
  heightPourcent: {
    height: '100%'
  },
  root: {
    width: '50%',
    height: '100%',
  },
  root2: {
    width: '50%',
    height: '100%',
  }
});

const App = () => {

  const [inputImageCompany, setInputImageCompany] = React.useState({ file: '' });
  const [addressCompany, setAddressCompany] = React.useState({ addressCompany: '' });
  const [zipCompany, setZipCompany] = React.useState({ zipCompany: '' });
  const [cityCompany, setCityCompany] = React.useState({ cityCompany: '' });
  const [nameClient, setNameClient] = React.useState({ nameClient: '' });
  const [addressClient, setAddressClient] = React.useState({ addressClient: '' });
  const [zipClient, setZipClient] = React.useState({ zipClient: '' });
  const [cityClient, setCityClient] = React.useState({ cityClient: '' });
  const [formProduct, setFormProduct] = React.useState([]);
  const [errorProduct, setErrorProduct] = React.useState(false);
  const [TVA, setTVA] = React.useState({ tva: 20 });
  const [totalLessTVA, setTotalLessTVA] = React.useState({ lessTVA: 0 });
  const [totalWithTVA, setTotalWithTVA] = React.useState({ withTVA: 0 });

  const ref = React.createRef();

  const classes = useStyle();
  const tableTitlesTuples = ['Produit', 'Quantité', 'Prix'];

  const handleChangeImage = (e) => {
    setInputImageCompany({ file: URL.createObjectURL(e.target.files[0]) });
  };

  const handleChangeAddressCompany = (e) => {
    setAddressCompany({ addressCompany: e.target.value });
  };

  const handleChangeZipCompany = (e) => {
    setZipCompany({ zipCompany: e.target.value });
  };

  const handleChangeCityCompany = (e) => {
    setCityCompany({ cityCompany: e.target.value });
  };
  const handleChangeNameClient = (e) => {
    setNameClient({ nameClient: e.target.value });
  };

  const handleChangeAddressClient = (e) => {
    setAddressClient({ addressClient: e.target.value });
  };

  const handleChangeZipClient = (e) => {
    setZipClient({ zipClient: e.target.value });
  };

  const handleChangeCityClient = (e) => {
    setCityClient({ cityClient: e.target.value });
  };

  const handleForm = (data, e) => {
    const { product, quantity, price } = data;

    if (isNaN(+price) || isNaN(+quantity)) {
      setErrorProduct(true);
      return setTimeout(() => setErrorProduct(false), 5000);
    }

    setFormProduct([
      ...formProduct,
      {
        product: product,
        quantity: +quantity,
        price: +price
      }
    ]);
    e.target.reset();
  };

  const handleValueTVA = (e) => {
    if (isNaN(+e.target.value)) {
      return;
    }

    setTVA({ tva: +e.target.value });
  };

  React.useEffect(() => {
    if (formProduct.length) {
      let total = 0;

      for (const priceProduct of formProduct) {
        let calculQtyPrice = +priceProduct.price * +priceProduct.quantity
        total = +total + calculQtyPrice;
      }

      setTotalLessTVA({ lessTVA: total });
      setTotalWithTVA({ withTVA: +total + (+total * (+TVA.tva / 100)) })
    }
  }, [TVA, formProduct])

  return (
    <Grid container className={classes.heightPourcent}>
      <Grid container direction="column" justify="space-around" className={classes.root}>
        <Header
          onChangeInputImage={handleChangeImage}
          onChangeInputAddressCompany={handleChangeAddressCompany}
          inputValueAddressCompany={addressCompany.addressCompany}
          onChangeNameClient={handleChangeNameClient}
          valueNameClient={nameClient.nameClient}
          onChangeAddressClient={handleChangeAddressClient}
          valueAddressClient={addressClient.addressClient}
          onChangeInputZipCompany={handleChangeZipCompany}
          onChangeInputCityCompany={handleChangeCityCompany}
          inputValueZipCompany={zipCompany.zipCompany}
          inputValueCityCompany={cityCompany.cityCompany}
          onChangeInputZipClient={handleChangeZipClient}
          valueZipClient={zipClient.zipClient}
          onChangeCityInputClient={handleChangeCityClient}
          valueCityClient={cityClient.zipClient}
        />
        <Content
          handleForm={handleForm}
          nameLabelTVA="Définissez votre TVA: "
          onChangeTVA={handleValueTVA}
          valueTVA={TVA.tva}
        />
        {errorProduct ? <ErrorAlert>Veuillez mettre un chiffre sur les champs "Quantité" et "Prix"</ErrorAlert> : null}
      </Grid>
      <Grid container direction="column" justify="space-around" className={classes.root2} ref={ref}>
        <HeaderRender
          compagnyImgSrc={inputImageCompany.file}
          compagnyImgAlt="company_img"
          compagnyImgWidth={200}
          compagnyImgHeight={100}
          compagnyAddressCompany={addressCompany.addressCompany}
          compagnyZipCompany={zipCompany.zipCompany}
          compagnyCityCompagny={cityCompany.cityCompany}
          clientName={nameClient.nameClient}
          clientAddress={addressClient.addressClient}
          clientZip={zipClient.zipClient}
          clientCity={cityClient.cityClient}
        />
        <ContentRender
          titlesTables={tableTitlesTuples}
          itemsTables={formProduct}
          valueTVA={TVA.tva}
          lessTVATotal={totalLessTVA.lessTVA}
          withTVATotal={totalWithTVA.withTVA}
          generatorTargetPdf={ref}
          generatorFilename="facture.pdf"
        />
      </Grid>
    </Grid>
  )
}

export default App;