import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFabricksList, getBinList, getBlazerBackList, getBlazerButtonList, getBlazerLapleList, getBlazerLapleWidthList, getBlazerLiningList, getBlazerPickStitchingList, getBlazerPocketList, getBlazerSleeveButtonList, getBlazerStyleList, getBodyTypeList, getBrandList, getChargesList, getColorList, getCountryList, getEmployeeList, getFabricFeelList, getFabricMaterialList, getFabricQualityList, getFabricUseList, getFabricsList, getItemCategoryList, getItemGradeList, getItemList, getKurtaCollarList, getKurtaFrontList, getKurtaPocketList, getKurtaSleeveList, getKurtaStyleList, getManufracturersList, getOccasionList, getPajamaBottomList, getPajamaLengthList, getPatternList, getPrimaryColorList, getRoleList, getRoutingList, getSherwaniCollarDesignList, getSherwaniCollarList, getSherwaniCuffDesignList, getSherwaniCuffList, getSherwaniFrontList, getSherwaniJariDesignList, getSherwaniPocketList, getSherwaniSideCutList, getShirtBackPleatList, getShirtBottomList, getShirtButtonList, getShirtCollarCuffThicknessList, getShirtCollarList, getShirtCuffList, getShirtFittingList, getShirtFrontList, getShirtPocketList, getStitchingCentersList, getTailorShopsList, getTotalRecordsCount, getTrouserBottomList, getTrouserButtonList, getTrouserCrotchList, getTrouserFittingList, getTrouserFrontPocketList, getTrouserPantCuffList, getTrouserPleatList, getTrouserPocketList, getTrouserWaistList, getUnitList, getUserList, getWaistCoatBottomTypeList, getWaistCoatNeckList, getWaistCoatPocketList, getWaistCoatTypeList } from '../../actions/actions';

const useAllAPI = () => {
    const dispatch = useDispatch();
    // const login_details = sessionStorage.getItem('loginUser');
    // const userD = JSON.parse(login_details);
    // const userInfo = userD.userInfo;

    const [timerExpired, setTimerExpired] = useState(false);

    let availRecord = useSelector(state => state.total_records.total_records);
    const primaryColorList = useSelector(state => state.color.primaryColor);
    const countryList = useSelector(state => state.manufracturers.countryList);

    const roleList = useSelector(state => state.role.role);
    const empList = useSelector(state => state.employee.employee);
    const binList = useSelector(state => state.bin.bin);
    const bodyTypeList = useSelector(state => state.body_type.body_type);
    const brandList = useSelector(state => state.brand.brand);
    const itemCategoryList = useSelector(state => state.itemCategory.itemCategory);
    const chargesList = useSelector(state => state.charges.charges);
    const colorList = useSelector(state => state.color.color);
    const fabricFeelList = useSelector(state => state.fabric_feel.fabric_feel);
    const fabricMaterialList = useSelector(state => state.fabric_material.fabric_material);
    const fabricQualityList = useSelector(state => state.fabric_quality.fabric_quality);
    const fabricUseList = useSelector(state => state.fabric_use.fabric_use);
    const itemList = useSelector(state => state.item.item);
    const occasionList = useSelector(state => state.occasion.occasion);
    const patternList = useSelector(state => state.pattern.pattern);
    const routingList = useSelector(state => state.routing.routing);
    const unitList = useSelector(state => state.unit.unit);
    const userList = useSelector(state => state.user.user);
    const itemGradeList = useSelector(state => state.item_grade.item_grade);

    const blazerBackList = useSelector(state => state.blazer_back.blazer_back);
    const blazerButtonList = useSelector(state => state.blazer_button.blazer_button);
    const blazerLapleList = useSelector(state => state.blazer_laple.blazer_laple);
    const blazerLapleWidthList = useSelector(state => state.blazer_laple_width.blazer_laple_width);
    const blazerLiningList = useSelector(state => state.blazer_lining.blazer_lining);
    const blazerPickStitchingList = useSelector(state => state.blazer_pick_stitching.blazer_pick_stitching);
    const blazerPocketList = useSelector(state => state.blazer_pocket.blazer_pocket);
    const blazerSleeveButtonList = useSelector(state => state.blazer_sleeve_button.blazer_sleeve_button);
    const blazerStyleList = useSelector(state => state.blazer_style.blazer_style);

    const kurtaCollarList = useSelector(state => state.kurta_collar.kurta_collar);
    const kurtaFrontList = useSelector(state => state.kurta_front.kurta_front);
    const kurtaPocketList = useSelector(state => state.kurta_pocket.kurta_pocket);
    const kurtaSleeveList = useSelector(state => state.kurta_sleeve.kurta_sleeve);
    const kurtaStyleList = useSelector(state => state.kurta_style.kurta_style);

    const pajamaBottomList = useSelector(state => state.pajama_bottom.pajama_bottom);
    const pajamaLengthList = useSelector(state => state.pajama_length.pajama_length);
    const sherwaniCollarList = useSelector(state => state.sherwani_collar.sherwani_collar);
    const sherwaniCollarDesignList = useSelector(state => state.sherwani_collar_design.sherwani_collar_design);
    const sherwaniCuffList = useSelector(state => state.sherwani_cuff.sherwani_cuff);
    const sherwaniCuffDesignList = useSelector(state => state.sherwani_cuff_design.sherwani_cuff_design);
    const sherwaniFrontList = useSelector(state => state.sherwani_front.sherwani_front);
    const sherwaniJariDesignList = useSelector(state => state.sherwani_jari_design.sherwani_jari_design);
    const sherwaniPocketList = useSelector(state => state.sherwani_pocket.sherwani_pocket);
    const sherwaniSideCutList = useSelector(state => state.sherwani_side_cut.sherwani_side_cut);

    const shirtBackPleatList = useSelector(state => state.shirt_backpleat.shirt_backpleat);
    const shirtBottomList = useSelector(state => state.shirt_bottom.shirt_bottom);
    const shirtButtonList = useSelector(state => state.shirt_button.shirt_button);
    const shirtCollarCuffThicknessList = useSelector(state => state.shirt_collar_cuff_thickness.shirt_collar_cuff_thickness);
    const shirtCollarList = useSelector(state => state.shirt_collar.shirt_collar);
    const shirtCuffList = useSelector(state => state.shirt_cuff.shirt_cuff);
    const shirtFittingList = useSelector(state => state.shirt_fitting.shirt_fitting);
    const shirtFrontList = useSelector(state => state.shirt_front.shirt_front);
    const shirtPocketList = useSelector(state => state.shirt_pocket.shirt_pocket);

    const trouserBackPocketList = useSelector(state => state.trouser_back_pocket.trouser_back_pocket);
    const trouserBottomList = useSelector(state => state.trouser_bottom.trouser_bottom);
    const trouserButtonList = useSelector(state => state.trouser_button.trouser_button);
    const trouserCrotchList = useSelector(state => state.trouser_crotch.trouser_crotch);
    const trouserFittingList = useSelector(state => state.trouser_fitting.trouser_fitting);
    const trouserFrontPocketList = useSelector(state => state.trouser_front_pocket.trouser_front_pocket);
    const trouserPantCuffList = useSelector(state => state.trouser_pant_cuff.trouser_pant_cuff);
    const trouserPleatList = useSelector(state => state.trouser_pleat.trouser_pleat);
    const trouserWaistList = useSelector(state => state.trouser_waist.trouser_waist);

    const waistCoatBottomTypeList = useSelector(state => state.waist_coat_bottom_type.waist_coat_bottom_type);
    const waistCoatPocketList = useSelector(state => state.waist_coat_pocket.waist_coat_pocket);
    const waistCoatTypeList = useSelector(state => state.waist_coat_type.waist_coat_type);
    const waistCoatNeckList = useSelector(state => state.waist_coat_neck.waist_coat_neck);

    const fabricList = useSelector(state => state.fabrics.fabrics);
    const manufacturerList = useSelector(state => state.manufracturers.manufracturers);
    const stitchingCenterList = useSelector(state => state.stitching_centers.stitching_centers);
    const tailorShopList = useSelector(state => state.tailor_shops.tailor_shops);


    useEffect(() => {
        dispatch(getTotalRecordsCount());

        const timer = setTimeout(() => {
            setTimerExpired(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (timerExpired) {
            if (availRecord.length > 0) {
                dispatch(getPrimaryColorList());
                dispatch(getCountryList());
                dispatch(getEmployeeList({ page: 0, size: availRecord[0].employee_count, searchKey: '' }));
                dispatch(getRoleList({ page: 0, size: availRecord[0].user_role_count, searchKey: '' }));
                dispatch(getBinList({ page: 0, size: availRecord[0].bin_count, searchKey: '' }));
                dispatch(getBodyTypeList({ page: 0, size: availRecord[0].body_type_count, searchKey: '' }));
                dispatch(getBrandList({ page: 0, size: availRecord[0].brand_count, searchKey: '' }));
                dispatch(getItemCategoryList({ page: 0, size: availRecord[0].item_category_count, searchKey: '' }));
                dispatch(getChargesList({ page: 0, size: availRecord[0].charges_count, searchKey: '' }));
                dispatch(getColorList({ page: 0, size: availRecord[0].color_count, searchKey: '' }));
                dispatch(getFabricFeelList({ page: 0, size: availRecord[0].fabric_feel_count, searchKey: '' }));
                dispatch(getFabricMaterialList({ page: 0, size: availRecord[0].fabric_material_count, searchKey: '' }));
                dispatch(getFabricQualityList({ page: 0, size: availRecord[0].fabric_quality_count, searchKey: '' }));
                dispatch(getFabricUseList({ page: 0, size: availRecord[0].fabric_use_count, searchKey: '' }));
                dispatch(getItemList({ page: 0, size: availRecord[0].item_count, searchKey: '' }));
                dispatch(getOccasionList({ page: 0, size: availRecord[0].occasion_count, searchKey: '' }));
                dispatch(getPatternList({ page: 0, size: availRecord[0].pattern_count, searchKey: '' }));
                dispatch(getRoutingList({ page: 0, size: availRecord[0].routing_count, searchKey: '' }));
                dispatch(getUnitList({ page: 0, size: availRecord[0].unit_count, searchKey: '' }));
                dispatch(getUserList({ page: 0, size: availRecord[0].user_count, searchKey: '' }));
                dispatch(getItemGradeList({ page: 0, size: availRecord[0].item_grade_count, searchKey: '' }));

                dispatch(getBlazerBackList({ page: 0, size: availRecord[0].blazer_back_count, searchKey: '' }));
                dispatch(getBlazerButtonList({ page: 0, size: availRecord[0].blazer_button_count, searchKey: '' }));
                dispatch(getBlazerLapleList({ page: 0, size: availRecord[0].blazer_laple_count, searchKey: '' }));
                dispatch(getBlazerLapleWidthList({ page: 0, size: availRecord[0].blazer_laple_width_count, searchKey: '' }));
                dispatch(getBlazerLiningList({ page: 0, size: availRecord[0].blazer_lining_count, searchKey: '' }));
                dispatch(getBlazerPickStitchingList({ page: 0, size: availRecord[0].blazer_pick_stitching_count, searchKey: '' }));
                dispatch(getBlazerPocketList({ page: 0, size: availRecord[0].blazer_pocket_count, searchKey: '' }));
                dispatch(getBlazerSleeveButtonList({ page: 0, size: availRecord[0].blazer_sleeve_button_count, searchKey: '' }));
                dispatch(getBlazerStyleList({ page: 0, size: availRecord[0].blazer_style_count, searchKey: '' }));

                dispatch(getKurtaCollarList({ page: 0, size: availRecord[0].kurta_collar_count, searchKey: '' }));
                dispatch(getKurtaFrontList({ page: 0, size: availRecord[0].kurta_front_count, searchKey: '' }));
                dispatch(getKurtaPocketList({ page: 0, size: availRecord[0].kurta_pocket_count, searchKey: '' }));
                dispatch(getKurtaSleeveList({ page: 0, size: availRecord[0].kurta_sleeve_count, searchKey: '' }));
                dispatch(getKurtaStyleList({ page: 0, size: availRecord[0].kurta_style_count, searchKey: '' }));

                dispatch(getPajamaBottomList({ page: 0, size: availRecord[0].pajama_bottom_count, searchKey: '' }));
                dispatch(getPajamaLengthList({ page: 0, size: availRecord[0].pajama_length_count, searchKey: '' }));
                dispatch(getSherwaniCollarList({ page: 0, size: availRecord[0].sherwani_collar_count, searchKey: '' }));
                dispatch(getSherwaniCollarDesignList({ page: 0, size: availRecord[0].sherwani_collar_design_count, searchKey: '' }));
                dispatch(getSherwaniCuffList({ page: 0, size: availRecord[0].sherwani_cuff_count, searchKey: '' }));
                dispatch(getSherwaniCuffDesignList({ page: 0, size: availRecord[0].sherwani_cuff_design_count, searchKey: '' }));
                dispatch(getSherwaniFrontList({ page: 0, size: availRecord[0].sherwani_front_count, searchKey: '' }));
                dispatch(getSherwaniJariDesignList({ page: 0, size: availRecord[0].sherwani_jari_design_count, searchKey: '' }));
                dispatch(getSherwaniPocketList({ page: 0, size: availRecord[0].sherwani_pocket_count, searchKey: '' }));
                dispatch(getSherwaniSideCutList({ page: 0, size: availRecord[0].sherwani_side_cut_count, searchKey: '' }));

                dispatch(getShirtBackPleatList({ page: 0, size: availRecord[0].shirt_backpleat_count, searchKey: '' }));
                dispatch(getShirtBottomList({ page: 0, size: availRecord[0].shirt_bottom_count, searchKey: '' }));
                dispatch(getShirtButtonList({ page: 0, size: availRecord[0].shirt_button_count, searchKey: '' }));
                dispatch(getShirtCollarCuffThicknessList({ page: 0, size: availRecord[0].shirt_collar_cuff_thickness_count, searchKey: '' }));
                dispatch(getShirtCollarList({ page: 0, size: availRecord[0].shirt_collar_count, searchKey: '' }));
                dispatch(getShirtCuffList({ page: 0, size: availRecord[0].shirt_cuff_count, searchKey: '' }));
                dispatch(getShirtFittingList({ page: 0, size: availRecord[0].shirt_fitting_count, searchKey: '' }));
                dispatch(getShirtFrontList({ page: 0, size: availRecord[0].shirt_front_count, searchKey: '' }));
                dispatch(getShirtPocketList({ page: 0, size: availRecord[0].shirt_pocket_count, searchKey: '' }));

                dispatch(getTrouserPocketList({ page: 0, size: availRecord[0].trouser_back_pocket_count, searchKey: '' }));
                dispatch(getTrouserBottomList({ page: 0, size: availRecord[0].trouser_bottom_count, searchKey: '' }));
                dispatch(getTrouserButtonList({ page: 0, size: availRecord[0].trouser_button_count, searchKey: '' }));
                dispatch(getTrouserCrotchList({ page: 0, size: availRecord[0].trouser_crotch_count, searchKey: '' }));
                dispatch(getTrouserFittingList({ page: 0, size: availRecord[0].trouser_fitting_count, searchKey: '' }));
                dispatch(getTrouserFrontPocketList({ page: 0, size: availRecord[0].trouser_front_pocket_count, searchKey: '' }));
                dispatch(getTrouserPantCuffList({ page: 0, size: availRecord[0].trouser_pant_cuff_count, searchKey: '' }));
                dispatch(getTrouserPleatList({ page: 0, size: availRecord[0].trouser_pleat_count, searchKey: '' }));
                dispatch(getTrouserWaistList({ page: 0, size: availRecord[0].trouser_waist_count, searchKey: '' }));

                dispatch(getWaistCoatBottomTypeList({ page: 0, size: availRecord[0].waist_coat_bottom_type_count, searchKey: '' }));
                dispatch(getWaistCoatPocketList({ page: 0, size: availRecord[0].waist_coat_pocket_count, searchKey: '' }));
                dispatch(getWaistCoatTypeList({ page: 0, size: availRecord[0].waist_coat_type_count, searchKey: '' }));
                dispatch(getWaistCoatNeckList({ page: 0, size: availRecord[0].waist_coat_neck_count, searchKey: '' }));

                dispatch(getFabricsList({ page: 0, size: availRecord[0].fabric_count, searchKey: '' }));
                dispatch(getManufracturersList({ page: 0, size: availRecord[0].manufacturer_count, searchKey: '' }));
                dispatch(getStitchingCentersList({ page: 0, size: availRecord[0].stitching_center_count, searchKey: '' }));
                dispatch(getTailorShopsList({ page: 0, size: availRecord[0].tailor_shop_count, searchKey: '' }));
              
            }
        }
    }, [timerExpired]);


    return {
        availRecord, countryList, primaryColorList, empList, roleList, binList, bodyTypeList, brandList,
        itemCategoryList, itemGradeList, chargesList, colorList, fabricFeelList, fabricMaterialList,
        fabricQualityList, fabricUseList, itemList, occasionList, patternList, routingList, unitList, userList,
        blazerBackList, blazerButtonList, blazerLapleList, blazerLapleWidthList, blazerLiningList,
        blazerPickStitchingList, blazerPocketList, blazerSleeveButtonList, blazerStyleList,
        kurtaCollarList, kurtaFrontList, kurtaPocketList, kurtaSleeveList, kurtaStyleList,
        pajamaBottomList, pajamaLengthList, sherwaniCollarList, sherwaniCollarDesignList, sherwaniCuffList,
        sherwaniCuffDesignList, sherwaniFrontList, sherwaniJariDesignList, sherwaniPocketList, sherwaniSideCutList,
        shirtBackPleatList, shirtBottomList, shirtButtonList, shirtCollarCuffThicknessList,
        shirtCollarList, shirtCuffList, shirtFittingList, shirtFrontList, shirtPocketList,
        trouserBackPocketList, trouserBottomList, trouserButtonList, trouserCrotchList, trouserFittingList,
        trouserFrontPocketList, trouserPantCuffList, trouserPleatList, trouserWaistList,
        waistCoatBottomTypeList, waistCoatPocketList, waistCoatTypeList, waistCoatNeckList,
        fabricList, manufacturerList, stitchingCenterList, tailorShopList, 
    };
};

export default useAllAPI;
